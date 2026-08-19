AddEvent(window, 'keyup', function(e)
{
    if (Game.promptOn && e.code == 'Space')
    {
        Game.ConfirmPrompt();
        e.preventDefault();
    }
});