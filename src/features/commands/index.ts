import type { Command } from "@/core/commands/Command"

import { Ping } from "./ping"
import { Play } from "./play"
import { Queue } from "./queue"
import { Skip } from "./skip"

export const Commands: Command[] = [Ping, Play, Queue, Skip]
