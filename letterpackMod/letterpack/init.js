(function () {
  const ev = maginai.events;

  ev.gameLoadFinished.addHandler(() => {
    const origMessage = tWgm.tGameTalkResource.talkData.system.logshiokuri;
    tWgm.tGameTalkResource.talkData.system.logshiokuri = origMessage.replace(
      '仕送り金として',
      '仕送り金として%c[emphasis]レターパックで'
    );
  });
})();
