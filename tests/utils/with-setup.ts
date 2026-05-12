import { createApp } from 'vue';
/**
 * Permite probar composables en un entorno controlado, simulando el ciclo de vida de Vue, útil para tests unitarios de lógica reutilizable.
 * @param composable
 * @returns
 */
export const withSetup = (composable: () => any) => {
  let result: any;

  const app = createApp({
    setup() {
      result = composable();

      return () => {};
    },
  });

  app.mount(document.createElement('div'));

  return [result, app] as const;
};
