bot.on("ready", () => {
  let guild = bot.guilds.get('607137367119364097'); // ايدي ال سيرفر
  setInterval(function() {
    guild.members.get('595653353783033857').setNickname('⁹').then(() => { // الايدي مالتك
      setTimeout(() => {
        guild.members.get('595653353783033857').setNickname('⁹⁹').then(() => { // الايدي مالتك
          setTimeout(() => {
            guild.members.get('595653353783033857').setNickname('⁹⁹⁹') // الايدي مالتك
          }, 2000); // هذا الوقت الي يتغير فيه لاول مره
        });
      }, 4000); // هذا الوقت الي يتغير فيه لثاني مره
    });
  }, 8000); // هذا الوقت وينعاد النك نيم من جديد
}) 



bot.login(process.env.BOT_TOKEN);
