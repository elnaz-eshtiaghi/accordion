let _P = document.querySelectorAll('par')
        let _acc = document.querySelectorAll('.mybtn')
        _acc.forEach((val) => {
            val.addEventListener('click', () => {
                val.childNodes[0].classList.toggle('bi-plus-lg')
                val.childNodes[0].classList.toggle('bi-dash-lg')
                val.parentElement.classList.toggle('border-bottom')
                val.parentElement.nextElementSibling.classList.toggle('d-none')
            })
        })
