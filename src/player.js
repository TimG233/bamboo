const { assert_queue } = require("./helper")
const { get_song_url_by_id } = require("./api")

const play = async (message) => {
  let queue = assert_queue(message)
  let channel = message.member.voice.channel

  if (queue.track.length === 0) {
    message.channel.send(`Nothing to play!`)
    return
  }

  if (!queue.connection) {
    queue.connection = await channel.join()
  }

  queue.connection.on("disconnect", () => {
    message.client.queue.delete(message.guild.id)
  })

  let curr_song = queue.track[queue.curr_pos]

  let url, dispatcher
  let play_message = ""

  if (curr_song.source === "netease") {
    url = await get_song_url_by_id(curr_song.id)
    play_message = `Playing: ${queue.track[queue.curr_pos].name} (${
      queue.track[queue.curr_pos].ar.name
    })`
    console.log(url)
  }

  if (!!url) {
    queue.text_channel.send(play_message)
    dispatcher = queue.connection.play(url).on("finish", () => {
      play_next(message)
    })
  } else {
    console.log("url invalid")
    queue.text_channel.send("Invalid song")
    play_next(message)
  }
}

const play_next = async (message) => {
  let queue = assert_queue(message)

  if (queue.track.length === 0) {
    message.channel.send(`Nothing to play!`)
    return
  }

  if (queue.looping) {
    queue.curr_pos = (queue.curr_pos + 1) % queue.track.length
    play(message)
  } else {
    if (queue.curr_pos < queue.track.length - 1) {
      queue.curr_pos++
      play(message)
    } else {
      queue.playing = false
    }
  }
}

exports.play = play
exports.play_next = play_next
