<?php
/**
 * @file
 * Provides a visitor context plugin for Custom Yuba data.
 */

class YubaLift extends PersonalizeContextBase {
  /**
   * Implements PersonalizeContextInterface::create().
   */
  public static function create(PersonalizeAgentInterface $agent = NULL, $selected_context = array()) {
    return new self($agent, $selected_context);
  }

  /**
   * Implements PersonalizeContextInterface::getOptions().
   */
  public static function getOptions() {
    $options = array();

    $options['car_color']   = array('name' => t('Car color'),);
    $options['destination'] = array('name' => t('Destination'),);

    foreach ($options as &$option) {
      $option['group'] = t('Yuba');
    }

    return $options;
  }
}
