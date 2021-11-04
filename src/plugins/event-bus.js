/**
 * Plugin emisor de eventos para usar en todos los componentes
 * Puede enviar y recibir eventos entre componentes sin importar la relación que tienen
 */

const eventBus = {};

/**
 * Vue usará esta función para injectarlo en todos los componentes
 * El $ indica que es un plugin o un método nativo de Vue y no del Vue Model. Esta disponible en cada componente
 * @param {} Vue Instancia de Vue
 */
eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue();
};

export default eventBus;