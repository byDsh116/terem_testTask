document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const data = {
    dropdown1: document.getElementById('dropdown1').value,
    dropdown2: document.getElementById('dropdown2').value,
    input1: document.getElementById('input1').value,
    input2: document.getElementById('input2').value,
  };

  const jsonData = JSON.stringify(data);
  console.log(jsonData);
});
