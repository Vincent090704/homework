var my_name = 'Charlie';

function calculate_area(w, h) {
  if (w === 0) {
    alert('Width is invalid');
  } else if (h === 0) {
    alert('Height is invalid');
  } else {
    return w * h;
  }
}

let cars = ['Volvo', 'BMW', 'Honda', 'Tesla'];
console.log(cars);

function change_content() {
  document.getElementById('div1').innerHTML = 'Hello guys';
}

function change_attribute() {
  document.getElementById('img1').src = 'https://images.pexels.com/photos/22610782/pexels-photo-22610782/free-photo-of-a-close-up-of-basil-plants-in-pots.jpeg';
}

function change_style() {
  document.getElementById('img2').style.width = '400px';
}

function show_hide() {
  document.getElementById('img3').style.display = 'none';
}

function print_triangle(row_num) {
  let triangle = '';
  for (let i = 1; i <= row_num; i++) {
    triangle += '*'.repeat(i) + '\n';
  }
  console.log(triangle);
}

// Example call to print_triangle
print_triangle(5);
