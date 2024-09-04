let tdpVotes = 0;
        let ysrcpVotes = 0;
        let congressVotes = 0;
        let janasenaVotes = 0;

        function updateVotes() {
            document.getElementById('tdp-votes').innerText = tdpVotes;
            document.getElementById('ysrcp-votes').innerText = ysrcpVotes;
            document.getElementById('congress-votes').innerText = congressVotes;
            document.getElementById('janasena-votes').innerText = janasenaVotes;
        }

        document.getElementById('vote-tdp').addEventListener('click', function() {
            tdpVotes++;
            updateVotes();
        });

        document.getElementById('vote-ysrcp').addEventListener('click', function() {
            ysrcpVotes++;
            updateVotes();
        });

        document.getElementById('vote-congress').addEventListener('click', function() {
            congressVotes++;
            updateVotes();
        });

        document.getElementById('vote-janasena').addEventListener('click', function() {
            janasenaVotes++;
            updateVotes();
        });

        document.getElementById('finish-voting').addEventListener('click', function() {
            let winner = '';
            let maxVotes = Math.max(tdpVotes, ysrcpVotes, congressVotes, janasenaVotes);

            if (maxVotes === tdpVotes) {
                winner = 'TDP';
            } else if (maxVotes === ysrcpVotes) {
                winner = 'YSRCP';
            } else if (maxVotes === congressVotes) {
                winner = 'Congress';
            } else if (maxVotes === janasenaVotes) {
                winner = 'Jana Sena';
            }

            document.getElementById('winner').innerText = 'Winner: ' + winner;
        });
