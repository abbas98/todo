
const submit = document.querySelector('.submit'),
  tablebody = document.querySelector('.tablebody'),
  date = new Date(),
  items = document.querySelectorAll('.items');
let itid = 0;
let removes = document.querySelectorAll('.delete');
let checkbox = document.querySelectorAll(".checkbox");

submit.addEventListener('click', () => {
  // let lastID = tablebody.lastElementChild.firstElementChild.innerHTML;
  const input = document.querySelector('.input');

  let child = `<tr class="items" id="${itid++}">

  <td class="px-6 py-4 text-sm text-gray-500 ">
    <input type="checkbox" onchange="changecheck(this)" name="check" class="checkbox">
  </td>
  <td class="hidden px-6 py-4 text-sm text-gray-500">

  </td>
  <td class="hidden px-6 py-4 text-sm text-gray-500">
      ${itid}
  </td>
  <td class="px-6 py-4 ">
      <div class="text-sm text-gray-900">
          ${input.value}
      </div>
  </td>
  <td class="px-6 py-4 text-sm text-gray-500">
    ${date.toLocaleString('fa-IR')}
  </td>


  <td class="px-6 py-4 text-red-800 ">
      <button class="delete" id="${itid}">Delete</button>
  </td>

</tr>`;
  tablebody.innerHTML += child;
  removes = document.querySelectorAll('.delete');

  removes.forEach((e) => {
    e.addEventListener('click', () => {
      e.parentElement.parentElement.remove();
    })
  })
});

function changecheck(element) {
  if (element.checked){
    element.parentElement.parentElement.style.backgroundColor = "#e9e9e9"
  }
  else{
    element.parentElement.parentElement.style.backgroundColor = "#fff";
  }
  
}









