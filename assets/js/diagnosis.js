function output(form) {
//    var sum = 0;
//    for(var i = 0; i < form.diagnosis1; i++){
//        if(form.diagnosis1[i].checked){
//            sum += form.diagnosis1[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis2; i++){
//        if(form.diagnosis2[i].checked){
//            sum += form.diagnosis2[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis3; i++){
//        if(form.diagnosis3[i].checked){
//            sum += form.diagnosis3[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis4; i++){
//        if(form.diagnosis4[i].checked){
//            sum += form.diagnosis4[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis5; i++){
//        if(form.diagnosis5[i].checked){
//            sum += form.diagnosis5[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis6; i++){
//        if(form.diagnosis6[i].checked){
//            sum += form.diagnosis6[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis7; i++){
//        if(form.diagnosis7[i].checked){
//            sum += form.diagnosis7[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis8; i++){
//        if(form.diagnosis8[i].checked){
//            sum += form.diagnosis8[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis9; i++){
//        if(form.diagnosis9[i].checked){
//            sum += form.diagnosis9[i].value;
//            break;
//        }
//    }
//    for(var i = 0; i < form.diagnosis10; i++){
//        if(form.diagnosis10[i].checked){
//            sum += form.diagnosis10[i].value;
//            break;
//        }
//    }
    
    var sum = 0 * 1;
    var checkvalue = $('input:radio[name="diagnosis1"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis2"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis3"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis4"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis5"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis6"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis7"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis8"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis9"]:checked').val() * 1;
    sum += checkvalue;
    checkvalue = $('input:radio[name="diagnosis10"]:checked').val() * 1;
    sum += checkvalue;
    
    document.getElementById("diagnosis-result").innerHTML = sum;
}