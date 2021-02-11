const shuffle = (arr) => {
  var curr_index = arr.length,
    temp,
    ran_index

  while (0 !== curr_index) {
    ran_index = Math.floor(Math.random() * curr_index)
    curr_index -= 1

    temp = arr[curr_index]
    arr[curr_index] = arr[ran_index]
    arr[ran_index] = temp
  }

  return arr
}

const parse_lrc = (lrc) => {
  if (typeof lrc === "undefined") {
    return "```No lyrics available```"
  }
  let sanitized = lrc.split("\n")
  for (let i = 0; i < sanitized.length; i++) {
    let l = sanitized[i]
    try {
      if (l.length >= 0 && l[0] == "[") {
        sanitized[i] = sanitized[i].slice(sanitized[i].indexOf("]") + 1)
      }
    } catch (err) {
      console.log(err)
    }
  }

  let prased = "```"
  for (let i = 0; i < sanitized.length; i++) {
    if (prased.length < 1990) {
      prased += sanitized[i] + "\n"
    }
  }
  prased += "```"
  return prased
}

const exist = (param) => {
  return typeof param !== "undefined"
}

exports.exist = exist
exports.parse_lrc = parse_lrc