const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
      if (this.el.classList.contains('btn-up__hide') && !this.el.classList.contains('btn-up__hiding')) {
        this.el.classList.remove('btn-up__hide');
        this.el.classList.add('btn-up__hiding');
        window.setTimeout(() => {
          this.el.classList.remove('btn-up__hiding');
        }, 300);
      }
    },
    hide() {
      if (!this.el.classList.contains('btn-up__hide') && !this.el.classList.contains('btn-up__hiding')) {
        this.el.classList.add('btn-up__hiding');
        window.setTimeout(() => {
          this.el.classList.add('btn-up__hide');
          this.el.classList.remove('btn-up__hiding');
        }, 300);
      }
    },
    addEventListener() {
    
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (this.scrolling && scrollY > 0) {
          return;
        }
        this.scrolling = false;
        
        if (scrollY > 700) {
          
          this.show();
        } else {
     
          this.hide();
        }
      });
      
      document.querySelector('.btn-up').onclick = () => {
        this.scrolling = true;
        this.hide();
       
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();