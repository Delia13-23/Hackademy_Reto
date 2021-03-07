const $form = document.querySelector('#form')
const $foto = document.querySelector('#foto')
const $file = document.querySelector('#file')

function renderImage(formData) {
         const file = formData.get('foto')
         const foto = URL.createObjectURL(file)
         $foto.setAttribute('src', foto)
}

$file.addEventListener('change', (Event) =>{
    const formData = new FormData($form)
    renderImage(formData)
})

$form.addEventListener('submit',(Event) => {
    Event.preventDefault()
    const formData = new FormData(Event.currentTarget)
    renderImage(formData)
    fetch('/', {
        method: 'POST',
        body: formData,
    })
})