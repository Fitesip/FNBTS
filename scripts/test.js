let img_arr = [
    img1 = document.getElementById('1'),
    img2 = document.getElementById('2'),
    img3 = document.getElementById('3'),
    img4 = document.getElementById('4'),
    img5 = document.getElementById('5'),
];
let background = document.querySelector('.background')

let even = true


for (let i = 0; i < img_arr.length; i++) {
    img_arr[i].onclick = function () {
        if (even) {
            img_arr[i].style.position = 'fixed';
            img_arr[i].style.left = '0' + 'px';
            img_arr[i].style.top = '0' + 'px';
            img_arr[i].style.bottom = '0' + 'px';
            img_arr[i].style.width = '100%';
            img_arr[i].style.height = '100%';
            img_arr[i].style.zIndex = '3';

            even = false;
        }
        else {
            img_arr[i].style.position = 'unset';
            img_arr[i].style.left = 'unset';
            img_arr[i].style.top = 'unset';
            img_arr[i].style.bottom = 'unset';
            img_arr[i].style.width = '192' + 'px';
            img_arr[i].style.height = '192' + 'px';
            img_arr[i].style.zIndex = 'unset';

            even = true;
        }
    };
}