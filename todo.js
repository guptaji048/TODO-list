var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var clearButton = document.getElementById('clear')
clearButton.addEventListener('click',clearItem)


function addItem() {
    var input = document.getElementById('input')
    var item = input.value
    var textNode =document.createTextNode(item)

    if (item==='') {
        return false
    }else {
        //create li
        li= document.createElement('li')
        li.setAttribute('class','myCheck')
        //create input
        var checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.setAttribute('id','check')
        //create label
        var label =document.createElement('label')
        
        //add items
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])

        setTimeout(() => {
            li.className = 'visual'   
        },5);

        input.value=''
    }
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }   
    }
}

function clearItem() {
    li=ul.children
    ul.remove(li)
}