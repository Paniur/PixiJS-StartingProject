import * as PIXI from "pixi.js";
import { Loader } from "./Loader";
import { SceneManager } from "./SceneManager";

class Application {
    app = new PIXI.Application();
    run(config) {
        this.config = config;
        // this.app = new PIXI.Application({resizeTo: window});
        // ;
        //const app = new PIXI.Application();

        (async () => {
            await this.app.init({
                resizeTo: window,
            });
            document.body.appendChild(this.app.canvas)
            this.loader = new Loader(this.config);
            this.loader.preload().then(() => this.start());

            this.scenes = new SceneManager();
            this.app.stage.addChild(this.scenes.container);
        })()

    }

    res(key) {
        return this.loader.resources[key];
    }

    sprite(key) {
        return new PIXI.Sprite(this.res(key));
    }

    start() {
        this.scenes.start("Game");
    }
}

export const App = new Application();
