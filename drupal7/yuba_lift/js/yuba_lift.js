(function ($) {
  /**
   * Visitor Context object.
   * Code is mostly pulled together from Personalize modules.
   */
  Drupal.personalize = Drupal.personalize || {};
  Drupal.personalize.visitor_context = Drupal.personalize.visitor_context || {};
  Drupal.personalize.visitor_context.yuba_lift = {
    'getContext': function(enabled) {
      if (!Drupal.settings.hasOwnProperty('yuba_lift')) {
        return [];
      }

      var i = 0;
      var context_values = {};

      for (i in enabled) {
        if (enabled.hasOwnProperty(i) && Drupal.settings.yuba_lift.contexts.hasOwnProperty(i)) {
          context_values[i] = Drupal.settings.yuba_lift.contexts[i];
        }
      }
      
      return context_values;
    }
  };

})(jQuery);
