const renderContens = (elements, arrContents) => {
    const copyPosts = elements.posts;
    copyPosts.textContent = '';
    const divPost = document.createElement('div');
    const divCardPost = document.createElement('div');
    const h2CardBody = document.createElement('h2');
    const ulPost = document.createElement('ul');
  
    divPost.classList.add('card', 'border-0');
    divCardPost.classList.add('card-body');
    h2CardBody.classList.add('card-title', 'h4');
    ulPost.classList.add('list-group', 'border-0', 'rounded-0');
    h2CardBody.textContent = 'Посты';
    arrContents.forEach((el) => {
      const liCardBody = document.createElement('li');
      const a = document.createElement('a');
      const button = document.createElement('button');
      liCardBody.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
      button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
      button.setAttribute('type', 'buttom');
      button.setAttribute('data-bs-toggle', 'modal');
      button.setAttribute('data-bs-target', '#modal');
      button.setAttribute('id', el.id);
      button.textContent = 'Просмотр';
      a.classList.add('fw-bold');
      a.setAttribute('href', el.link);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      a.setAttribute('id', el.id);
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const modalTitleCopy = elements.modalTitle;
        const modalBodyCopy = elements.modalBody;
        const btnPrimaryCopy = elements.btnPrimary;
        modalTitleCopy.textContent = el.title;
        modalBodyCopy.textContent = el.description;
        btnPrimaryCopy.href = el.link;
        a.classList.remove('fw-bold');
        a.classList.add('fw-normal', 'link-secondary');
      });
      a.textContent = el.title;
      liCardBody.append(a, button);
      ulPost.append(liCardBody);
    });
    divCardPost.append(h2CardBody);
    divPost.append(divCardPost, ulPost);
    const postCopy = elements.posts;
    postCopy.textContent = '';
    elements.posts.append(divPost);
  };
  
  export default renderContens;