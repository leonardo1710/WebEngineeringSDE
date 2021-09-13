<?php 
  class Greeting {
    public $message;
    
    function set_msg($msg){
      $this->message = $msg;
    }

    function get_msg(){
      return $this->message;
    }
  }
?>