// ES2018
// jQuery 3.x
// jquery.blockUI.js

"use strict";

/* exported attachConnpassEventGetterBehavior */
const attachConnpassEventGetterBehavior = (buttonSelector, targetSelector) => {
  // https://connpass.com/about/api/
  $(buttonSelector).on('click', () => {
    $.blockUI({
      message: null
    });
    const queryString = getConnpassRequestQueryString('東京', 3, 2, 100);
    $.ajax({
      url: 'https://connpass.com/api/v1/event/?' + queryString,
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'callback'
    })
      .done((data, textStatus, jqXHR) => {
        // success
        const formattedDataAndCaptions = formatConnpassEventData(data.events, true);
        const outputText = arrayToTableElement(formattedDataAndCaptions.formattedData, formattedDataAndCaptions.captionAndColumns);
        $(targetSelector).empty().append(outputText);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        // error
        alert('fail');
      })
      .always((arg1, textStatus, arg3) => {
        // complete
        $.unblockUI();
      });
  });
}

const getConnpassRequestQueryString = (keyword, days, order, count) => {
  const nows = new Array();
  nows[0] = new Date();
  for (let i = 1; i < days; i++) {
    nows[i] = new Date(nows[0].getTime());
    nows[i].setDate(nows[0].getDate() + i);
  }
  let ymdQuery = '';
  for (let i = 0; i < days; i++) {
    ymdQuery += '&ymd=' + nows[i].getFullYear() + ('0' + (nows[i].getMonth() + 1)).slice(-2) + nows[i].getDate();
  }
  return 'keyword=' + keyword + ymdQuery + '&order=' + order + '&count=' + count;
}

const formatConnpassEventData = (events, isReverse = false) => {
  const formattedData = new Array();
  for (const event of events) {
    const row = new Array();
    row['date'] = new Date(event.started_at).toLocaleString();
    row['title'] = '<a href="' + event.event_url + '">' + event.title + '</a>';
    row['limit'] = event.accepted + ' / ' + event.limit;
    formattedData.push(row);
  }
  if (isReverse) {
    formattedData.reverse();
  }
  return {
    'formattedData': formattedData,
    'captionAndColumns': {
      '日付': 'date',
      'タイトル': 'title',
      '規模': 'limit'
    }
  };
}

const arrayToTableElement = (records, captionsAndColumns) => {
  let outputText = `
<table>
    <tr>`;
  for (const key in captionsAndColumns) {
    outputText += `
        <th>${key}</th>`;
  }
  outputText += `
    </tr>`;
  for (const key1 in records) {
    outputText += `
    <tr>`;
    for (const key2 in captionsAndColumns) {
      outputText += `
        <td>${records[key1][captionsAndColumns[key2]]}</td>`;
    }
    outputText += `
    </tr>`;
  }
  outputText += `
</table>`;
  return outputText;
}