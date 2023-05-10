import onChange from 'on-change';
import renderError from './renders/renderError.js';
import renderSuccessfulDonwload from './renders/renderValid.js';
import renderFeeds from './renders/renderFeeds.js';
import renderContent from './renders/renderContent.js';
import renderForm from './renders/renderForm.js';

const watching = (state, elements, i18n) => onChange(state, (path, newValue) => {
  switch (path) {
    case 'error':
      renderError(elements, newValue, i18n);
      return;
    case 'process':
      renderForm(elements, newValue);
      return;
    case 'urlsList':
      renderSuccessfulDonwload(elements, 'validRSS', i18n);
      return;
    case 'dataRSS.feeds':
      renderFeeds(elements, newValue, i18n);
      return;
    case 'dataRSS.contents':
      renderContent(elements, newValue, i18n, state.dataRSS.activesId);
      return;
    case 'dataRSS.activesId':
      renderContent(elements, state.dataRSS.contents, i18n, newValue);
      return;
    default:
      throw Error(`Error state: ${path}`);
  }
});
export default watching;
