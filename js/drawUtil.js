export function drawInterArrow(ctx, fromX, fromY, toX, toY, theta, headLen, width, color) {
    let dis = Math.sqrt((toY - fromY) ** 2 + (toX - fromX) ** 2);
    if (dis < 60) {
        return;
    }

    let angle = Math.atan2(toY - fromY, toX - fromX);
    fromX = fromX + 35 * Math.cos(angle);
    fromY = fromY + 35 * Math.sin(angle);


    drawArrow(ctx, fromX, fromY, toX, toY, theta, headLen, width, color);
}

export function drawArrow(ctx, fromX, fromY, toX, toY, theta = 30, headLen = 10, width = 1, color = '#000') {
    let angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
        angle1 = (angle + theta) * Math.PI / 180,
        angle2 = (angle - theta) * Math.PI / 180,
        topX = headLen * Math.cos(angle1),
        topY = headLen * Math.sin(angle1),
        botX = headLen * Math.cos(angle2),
        botY = headLen * Math.sin(angle2);
    ctx.save();
    ctx.beginPath();
    let arrowX, arrowY;
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    arrowX = toX + topX;
    arrowY = toY + topY;
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(toX, toY);
    ctx.moveTo(toX, toY);
    arrowX = toX + botX;
    arrowY = toY + botY;
    ctx.lineTo(arrowX, arrowY);


    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();

    ctx.moveTo(toX, toY);
    ctx.arc(toX, toY, width / 2, angle1 + Math.PI / 2, angle2 - Math.PI / 2, false);

    ctx.fill();
    ctx.closePath();
}