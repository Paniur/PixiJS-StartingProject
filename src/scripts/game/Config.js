import { Tools } from "../system/Tools"
import { Game } from "./Game"
export const Config = {
    loader: Tools.massiveRequire(require["context"]("./../../sprites/"), true, /\.(png|jpg|jpeg|svg)$/),
    scenes: {
        "Game" : Game
    }

}