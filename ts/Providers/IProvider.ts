import AdManager = Fabrique.Plugins.AdManager;

module Fabrique {
    export module AdProvider {
        export interface IProvider {
            adManager: AdManager;

            setManager(manager: AdManager): void;
            requestAd(): void;
            initializeAd(): void;
        }
    }
}