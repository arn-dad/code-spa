function countryCellRenderer(params) {
  return `<span style="cursor: default;">${params.value}</span>`;
}

function latinText() {
  return '<p>Sample Text in a Paragraph</p><p>Lorem ipsum dolor sit amet, his mazim necessitatibus te, mea volutpat intellegebat at. Ea nec perpetua liberavisse, et modo rebum persius pri. Velit recteque reprimique quo at. Vis ex persius oporteat, esse voluptatum moderatius te vis. Ex agam suscipit aliquando eum. Mediocrem molestiae id pri, ei cibo facilisis mel. Ne sale nonumy sea. Et vel lorem omittam vulputate. Ne prima impedit percipitur vis, erat summo an pro. Id urbanitas deterruisset cum, at legere oportere has. No saperet lobortis elaboraret qui, alii zril at vix, nulla soluta ornatus per ad. Feugiat consequuntur vis ad, te sit quodsi persequeris, labore perpetua mei ad. Ex sea affert ullamcorper disputationi, sit nisl elit elaboraret te, quodsi doctus verear ut eam. Eu vel malis nominati, per ex melius delenit incorrupte. Partem complectitur sed in. Vix dicta tincidunt ea. Id nec urbanitas voluptaria, pri no nostro disputationi. Falli graeco salutatus pri ea.</p><p>Quo ad omnesque phaedrum principes, tale urbanitas constituam et ius, pericula consequat ad est. Ius tractatos referrentur deterruisset an, odio consequuntur sed ad. Ea molestie adipiscing adversarium eos, tale veniam sea no. Mutat nullam philosophia sed ad. Pri eu dicta consulatu, te mollis quaerendum sea. Ei doming commodo euismod vis. Cu modus aliquip inermis his, eos et eirmod regione delicata, at odio definiebas vis.</p><p>Lorem ipsum dolor sit amet, his mazim necessitatibus te, mea volutpat intellegebat at. Ea nec perpetua liberavisse, et modo rebum persius pri. Velit recteque reprimique quo at. Vis ex persius oporteat, esse voluptatum moderatius te vis. Ex agam suscipit aliquando eum. Mediocrem molestiae id pri, ei cibo facilisis mel. Ne sale nonumy sea. Et vel lorem omittam vulputate. Ne prima impedit percipitur vis, erat summo an pro. Id urbanitas deterruisset cum, at legere oportere has. No saperet lobortis elaboraret qui, alii zril at vix, nulla soluta ornatus per ad. Feugiat consequuntur vis ad, te sit quodsi persequeris, labore perpetua mei ad. Ex sea affert ullamcorper disputationi, sit nisl elit elaboraret te, quodsi doctus verear ut eam. Eu vel malis nominati, per ex melius delenit incorrupte. Partem complectitur sed in. Vix dicta tincidunt ea. Id nec urbanitas voluptaria, pri no nostro disputationi. Falli graeco salutatus pri ea.</p><p>Quo ad omnesque phaedrum principes, tale urbanitas constituam et ius, pericula consequat ad est. Ius tractatos referrentur deterruisset an, odio consequuntur sed ad. Ea molestie adipiscing adversarium eos, tale veniam sea no. Mutat nullam philosophia sed ad. Pri eu dicta consulatu, te mollis quaerendum sea. Ei doming commodo euismod vis. Cu modus aliquip inermis his, eos et eirmod regione delicata, at odio definiebas vis.</p>';
}

export function getColumnDefs() {
  let columnDefs = [
    {
      headerName         : 'Name',
      field              : 'name',
      width              : 150,
      cellRenderer       : 'agGroupCellRenderer',
      cellRendererParams : { innerRenderer: countryCellRenderer }
    },
    {
      headerName : 'Continent',
      field      : 'continent',
      width      : 150
    },
    {
      headerName : 'Language',
      field      : 'language',
      width      : 150
    }
  ];
  for (let i = 0; i < 10; i += 1) {
    columnDefs.push({
      headerName  : `More Data ${i}`,
      valueGetter : 'Math.random()',
      width       : 150
    });
  }
  return columnDefs;
}


export function getFullWidthCellRenderer() {
  function FullWidthCellRenderer() {}
  FullWidthCellRenderer.prototype.init = function initTo(params) {
    let eTemp = document.createElement('div');
    eTemp.innerHTML = this.getTemplate(params);
    this.eGui = eTemp.firstElementChild;
    this.consumeMouseWheelOnCenterText();
  };
  FullWidthCellRenderer.prototype.getTemplate = function getTemp(params) {
    let { node:{ data } } = params;
    let template = `${'<div class="full-width-panel">'
      + '  <div class="full-width-flag">'
      + '    <img border="0" src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/images/largeFlags/'}${
      data.code
    }.png">`
      + '  </div>'
      + '  <div class="full-width-summary">'
      + `    <span class="full-width-title">${
        data.name
      }</span><br/>`
      + `    <label><b>Population:</b> ${
        data.population
      }</label><br/>`
      + `    <label><b>Known For:</b> ${
        data.summary
      }</label><br/>`
      + '  </div>'
      + `  <div class="full-width-center">${
        latinText()
      }  </div>`
      + '</div>';
    return template;
  };
  FullWidthCellRenderer.prototype.getGui = function getGuiCell() {
    return this.eGui;
  };
  FullWidthCellRenderer.prototype.consumeMouseWheelOnCenterText = function centerText() {
    let eFullWidthCenter = this.eGui.querySelector('.full-width-center');
    let mouseWheelListener = function mouseWheelList(event) {
      event.stopPropagation();
    };
    eFullWidthCenter.addEventListener('mousewheel', mouseWheelListener);
    eFullWidthCenter.addEventListener('DOMMouseScroll', mouseWheelListener);
  };
  return FullWidthCellRenderer;
}
