
var btn = document.getElementById('btn');
if (btn) {

    btn.addEventListener('click', function () {

        console.log('Click!');

        var field1 = document.getElementById('field1').value;
        var field2 = document.getElementById('field2').value;

        var result = Number(field1) + Number(field2);
        console.log(result);

    })
} else {
    console.log('Please create an input with id btn');

}
