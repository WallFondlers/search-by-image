import {findNode} from 'utils/common';
import {setFileInputData, initSearch, sendReceipt} from 'utils/engines';

const engine = 'dreamstime';

async function search({session, search, image, storageIds}) {
  const inputSelector = 'input.puzzle-file';
  const input = await findNode(inputSelector);

  await setFileInputData(inputSelector, input, image);

  await sendReceipt(storageIds);

  input.dispatchEvent(new Event('change'));
}

function init() {
  initSearch(search, engine, taskId);
}

init();
