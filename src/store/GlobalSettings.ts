import { createStore } from "solid-js/store"

namespace GlobalSettings {
    export const [settings, setSettings] = createStore({
        show3DBackground: true,
    })
}

export default GlobalSettings