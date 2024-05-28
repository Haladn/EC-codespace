<?php
// php have three types of array
// numeric or indexed array
// associative
// multidimentional

//1 numeric or indexed
$arr = array('jack',3,null,10.5);

foreach($arr as $item){
    echo $item."\n";
};

echo "number of items is: ".count($arr)."\n";

// associative array

$arr1 = array("name"=>"jack","age"=>25,"nationality"=>"American");
// modifying array
$arr1['name'] = "Rio";

echo $arr1['name']."\n";

?>