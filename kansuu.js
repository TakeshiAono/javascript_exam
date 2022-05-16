function get_pass_or_failure(x, y, z) {
    if(x >= 60 && y >= 60 && z >= 60){
      return "合格";
    }
    else{
      return "不合格";
    }
    
  }

  let subject_points = [Number($('#national_language').val()),
  Number($('#math').val()),
  Number($('#science').val())
  ];

 




console.log(subject_points[0]);

  let x =  subject_points[0];
  let y = subject_points[1];
  let z = subject_points[2];
  console.log(get_pass_or_failure(x, y, z));  
  