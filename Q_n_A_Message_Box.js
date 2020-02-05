function hideAllResButtons() {alert('hide butts')
	var buttons=window.document.querySelectorAll('input.resBtn');
	for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.display='none';
	 }
}
function showAllResButtons() {
	var buttons=window.document.querySelectorAll('input.resBtn');
	for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.display='block';
	 }
}
function showButton(buttonID) {
	window.document.getElementById(buttonID).style.display='block';
}
function hideButton(buttonID) {
	window.document.getElementById(buttonID).style.display='none';
}
function BoxClose() {
	Display.document.getElementById('Process').innerHTML='';
	Display.document.getElementById('Process').style.display='none';
	}

function TableMoved() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='We are voting on whether to &ldquo;table&rdquo; (put aside) this resolution to address more urgent business. If so, we must bring the resolution back for consideration later.';
	hideAllResButtons();
	showButton('TableSucceeds');
	showButton('TableDefeated');
	}

function TableWins() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The House chose to table the resolution. This resolution will be &ldquo;laid on the table&rdquo; and must be brought back to consider later.';
	logger('Motion to Table','Wins');
	hideAllResButtons();
	window.document.getElementById('CloseBox').style.display='block';
	}

function TableFails() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The vote failed. We will now continue to consider the resolution.';
	logger('Motion to Table','Fails');
	}

function ResVote() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='We are now voting on the original resolution.';

	}

function ResAmendedVote() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='We are now voting on the original resolution <b><em>as it has been amended</em></b>.';
	}

function ResWins() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The House voted to <b>ADOPT</b> the original resolution.';
	logger('Resolution Wins with No Amendments','Resolution Text:\r\n'+restext);
	}

function ResAmendedWins() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The House voted to <b>ADOPT</b> the resolution <em>as amended</em>.';
	logger('Amended Resolution Wins','Amended Resolution Text:\r\n'+restext);
	}

function ResFails() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The resolution was defeated.';
	logger('Resolution Fails','Resolution Text:\r\n'+restext);
	}

function ResClose() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='Motion to Close Debate on the Resolution. <span style="color: #aaaaaa;">If motion wins, we vote immediately on the resolution.</span>';
	}

function AmendVote() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='We are now voting on the proposed amendment to the resolution.';
	}

function AmendAmendedVote() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='We are now voting on the Amendment to the resolution <b><em>as that amendment has previously been amended</em></b>.';
	}

function AmendWins() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The House voted to <b>ADOPT</b> the Amendment to the resolution. We will now consider the amended resolution.';
	logger('Amendment to the Resolution Wins','Amended Resolution Text:\r\n'+restext);
	}

function AmendAmendedWins() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The House voted to <b>ADOPT</b> the Amendment to the Resolution <em>as amended</em>. We will now consider the amended resolution.';
	logger('Amendment to the Amendment to the Resolution Wins','Amended, Amended Resolution Text:\r\n'+restext);
	}

function AmendFails() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The Amendment to the Resolution was defeated. We will now continue considering the original resolution.';
	logger('Amendment to the Resolution Fails','Amended Resolution Text:\r\n'+restext);
	}

function AmendClose() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='Motion to Close Debate on the Amendment. <span style="color: #aaaaaa;">If motion wins, we vote immediately on the amendment. After, we continue debating the resolution.</span>';
	}

function AmendCloseAll() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='Motion to Close Debate on All Matters Before the House. <span style="color: #aaaaaa;">If passed, we vote immediately on the amendment. Then, we immediately vote on the the resolution.</span>';
	}

function Amend2Vote() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='We are now voting on the proposed amendment to the resolution.';
	}

function Amend2Wins() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The House voted to <b>ADOPT</b> the Amendment to the Amendment. We will now consider the amended amendment.';
	logger('Amendment to the Amendment to the Resolution Wins','Amended, Amended Resolution Text:\r\n'+restext);
	}

function Amend2Fails() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='The Amendment to the Amendment was defeated.<span style="color: #aaaaaa;"> We will now continue considering the original amendment to the resolution.</span>';
	logger('Amendment to the Amendment to the Resolution Fails','Amended, Amended Resolution Text:\r\n'+restext);
	}

function Amend2Close() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='Motion to Close Debate on the Amendment to the Amendment. <span style="color: #aaaaaa;">If motion wins, we vote immediately on the amendment to the amendment. After, we continue debating the amendment.</span>';
	}

function Amend2CloseAll() {
	Display.document.getElementById('Process').style.display='block';
	Display.document.getElementById('Process').innerHTML='Motion to Close Debate on All Matters Before the House. <span style="color: #aaaaaa;">If passed, we vote immediately on the amendment to the amendment. Then, we immediately vote on the amendment and then the resolution.</span>';
	}
