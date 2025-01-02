
function showFAQ(index){
    let faq1 = document.querySelector('#faq1');
    let faq2 = document.querySelector('#faq2');
    let faq3 = document.querySelector('#faq3');
    let faq4 = document.querySelector('#faq4');
    let faq5 = document.querySelector('#faq5');
    let faq6 = document.querySelector('#faq6');

    let action1 = faq1.querySelector('#faq-action');
    let action2 = faq2.querySelector('#faq-action');
    let action3 = faq3.querySelector('#faq-action');
    let action4 = faq4.querySelector('#faq-action');
    let action5 = faq5.querySelector('#faq-action');
    let action6 = faq6.querySelector('#faq-action');

    let body1 = faq1.querySelector('#faq-body');
    let body2 = faq2.querySelector('#faq-body');
    let body3 = faq3.querySelector('#faq-body');
    let body4 = faq4.querySelector('#faq-body');
    let body5 = faq5.querySelector('#faq-body');
    let body6 = faq6.querySelector('#faq-body');

    let head1 = faq1.querySelector('#faq-head');
    let head2 = faq2.querySelector('#faq-head');
    let head3 = faq3.querySelector('#faq-head');
    let head4 = faq4.querySelector('#faq-head');
    let head5 = faq5.querySelector('#faq-head');
    let head6 = faq6.querySelector('#faq-head');


    switch(index){
        case 0:
            head1.classList.toggle('sp-faq-head-open');
            head1.classList.toggle('sp-faq-head');
            body1.classList.toggle('d-none');
            action1.classList.toggle('sp-faq-action-open');
            action1.classList.toggle('sp-faq-action');

            break;

        case 1:
            head2.classList.toggle('sp-faq-head-open');
            head2.classList.toggle('sp-faq-head');
            body2.classList.toggle('d-none');
            action2.classList.toggle('sp-faq-action-open');
            action2.classList.toggle('sp-faq-action');

            break;

        case 2:
            head3.classList.toggle('sp-faq-head-open');
            head3.classList.toggle('sp-faq-head');
            body3.classList.toggle('d-none');
            action3.classList.toggle('sp-faq-action-open');
            action3.classList.toggle('sp-faq-action');

            break;
        
        case 3:
            head4.classList.toggle('sp-faq-head-open');
            head4.classList.toggle('sp-faq-head');
            body4.classList.toggle('d-none');
            action4.classList.toggle('sp-faq-action-open');
            action4.classList.toggle('sp-faq-action');

            break;

        case 4:
            head5.classList.toggle('sp-faq-head-open');
            head5.classList.toggle('sp-faq-head');
            body5.classList.toggle('d-none');
            action5.classList.toggle('sp-faq-action-open');
            action5.classList.toggle('sp-faq-action');

            break;
        
        case 5:
            head6.classList.toggle('sp-faq-head-open');
            head6.classList.toggle('sp-faq-head');
            body6.classList.toggle('d-none');
            action6.classList.toggle('sp-faq-action-open');
            action6.classList.toggle('sp-faq-action');

            break;
            
    }
}