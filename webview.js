'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    let inDirectMessages = 0;
    let unreads = document.querySelectorAll('.badge.unread-count')
    unreads.forEach(unread => inDirectMessages += Number(unread.textContent))
    Franz.setBadge(0, inDirectMessages);
  };

  Franz.loop(getMessages);

  setTimeout(() => {
    getTeamIcon();
  }, 4000);
};
