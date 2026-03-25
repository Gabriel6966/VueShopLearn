//Le decimos a ts que use los tipos de vite

/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  //Tenemos que cambiarlo a un object en este caso ya que ts no permite que haya cualquier cosa nula
  //A linter no le gusta el any entonces lo cambiamos por el unknown apra usarlo en ts
  const component: DefineComponent<object, object, unknown>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
