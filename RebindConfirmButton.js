AddEvent(window, 'keyup', function(e)
{
    if (!Game.promptOn) return;

    if (e.code == 'Space')
    {
        Game.ConfirmPrompt();
        e.preventDefault();
        e.stopImmediatePropagation();
    }
    else if (e.code == 'Enter')
    {
        e.preventDefault();
        e.stopImmediatePropagation();
    }
}, true);