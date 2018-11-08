<?php
namespace App\Plugins;


class Functions
{
  public function order($fields, $order, $defaultOrder = ['id', 'asc'])
  {
    if (is_array($order)) {
      if (isset($order['field']) &&
          in_array($order['field'], $fields) &&
          in_array($order['order'], ['desc', 'asc'])
      ) {
        return ([
            $order['field'], $order['order']
        ]);
      }
    } else {
      preg_match('/^([-_a-zA-Z\.]+)(Asc|Desc)$/', $order, $matched, PREG_OFFSET_CAPTURE);
      if (isset($matched[2]) &&
          in_array($matched[1][0], $fields) &&
          in_array($matched[2][0], ['Desc', 'Asc'])
      ) {
        return ([
            $matched[1][0], strtolower($matched[2][0])
        ]);
      }
    }
    return $defaultOrder;
  }

}

?>
