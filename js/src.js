window.onload = function() {
    var paper = Raphael(50, 50, 1300, 800),
        angle = 0,
        cx = 600,
        cy = 350,
        r = 0,
        c = 0,
        radius = 10,
        d = 0,
        count = 0,
        color = "grey";
    var s = paper.set(),
        arr = {
            x: [],
            y: []
        };
    paper.rect(50, 50, 10, 10).attr({
        fill: "#66FF66"
    });
    paper.text(80, 55, "sport").attr({
        "font-size": 15
    });
    paper.rect(50, 70, 10, 10).attr({
        fill: 'red'
    });
    paper.text(80, 75, "Movie").attr({
        "font": 10
    });
    paper.rect(50, 90, 10, 10).attr({
        fill: 'yellow'
    });
    paper.text(80, 95, "Family").attr({
        "font": 10
    });
    paper.rect(50, 110, 10, 10).attr({
        fill: 'grey'
    });
    paper.text(85, 115, "Evrything").attr({
        "font": 10
    });
    paper.text(100, 30, amitav[0].user.name).attr({
        "font-size": 20
    });
    for (var i = 0; i < amitav.length; i++) {
        if (i % 6 === 0) {
            c = c + 6;
            r = r + 20;
            d++;
            i = i - 1;
        }
        for (var j = 0; j < c; j++) {
            if (count != amitav.length) {
                if (amitav[count].text.match(/(sport|cricket|football|kbc)/i)) {

                    color = '#66FF66';
                } else if (amitav[count].text.match(/(cinema|movie|film)/i)) {
                    color = 'red';
                } else if (amitav[count].text.match(/(family|husband|wife|children|sister)/)) {
                    color = 'yellow';
                } else {

                    color = "grey";
                }
                x = cx + r * Math.cos(angle * (Math.PI / 180));
                y = cy + r * Math.sin(angle * (Math.PI / 180));
                var circle = paper.circle((200 + Math.random() * 1000), (200 + Math.random() * 500), 10).attr({
                    fill: color,
                    title: amitav[count].text
                }).hide();
                s.push(circle);
                arr.x.push(x);
                arr.y.push(y);
                angle = angle + (360 / (d * 6));
                i++;
                count++;
            }

        }
    }

    function anim(count) {
        if (count >= s.length) {
            return
        }
        s[count].show();
        s[count].animate({
            cx: arr.x[count],
            cy: arr.y[count]
        }, 50, 'linear', anim.bind(window, count + 1));
    };
    anim(0);
}