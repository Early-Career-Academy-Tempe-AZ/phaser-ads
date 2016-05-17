module Fabrique {
    export module Plugins {
        export interface AdGame extends Phaser.Game {
            ads: Fabrique.Plugins.AdManager;
        }

        export class AdManager extends Phaser.Plugin {
            public onContentPaused: Phaser.Signal = new Phaser.Signal();

            public onContentResumed: Phaser.Signal = new Phaser.Signal();

            public onAdClicked: Phaser.Signal = new Phaser.Signal();

            private provider: AdProvider.IProvider = null;

            constructor(game: AdGame, parent:PIXI.DisplayObject) {
                super(game, parent);

                Object.defineProperty(game, 'ads', {
                    value: this
                });
            }

            public setAdProvider(provider: AdProvider.IProvider): void {
                this.provider = provider;
                this.provider.setManager(this);
            }

            public requestAd(): void {
                if (null === this.provider) {
                    return;
                }

                this.provider.requestAd();
            }
            
            public enableMobileAds(): void {
                if (null === this.provider) {
                    return;
                }

                this.provider.initializeAd();
            }
        }
    }
}
