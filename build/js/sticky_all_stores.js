!function(){var l=document.querySelector(".promo-sticky"),r=null;function e(){if(null==r){for(var e=getComputedStyle(l,""),t="",o=0;o<e.length;o++)0!=e[o].indexOf("overflow")&&0!=e[o].indexOf("padding")&&0!=e[o].indexOf("border")&&0!=e[o].indexOf("outline")&&0!=e[o].indexOf("box-shadow")&&0!=e[o].indexOf("background")||(t+=e[o]+": "+e.getPropertyValue(e[o])+"; ");(r=document.createElement("div")).style.cssText=t+" box-sizing: border-box; width: "+l.offsetWidth+"px;",l.insertBefore(r,l.firstChild);var n=l.childNodes.length;for(o=1;o<n;o++)r.appendChild(l.childNodes[1]);l.style.height=r.getBoundingClientRect().height+"px",l.style.padding="0",l.style.border="0"}var d=l.getBoundingClientRect(),i=Math.round(d.top+r.getBoundingClientRect().height-document.querySelector(".ui-footer").getBoundingClientRect().top+0);d.top-0<=0?d.top-0<=i?(r.className="stop",r.style.top=-i+"px"):(r.className="sticky",r.style.top="0px"):(r.className="",r.style.top=""),window.addEventListener("resize",function(){l.children[0].style.width=getComputedStyle(l,"").width},!1)}window.addEventListener("scroll",e,!1),document.body.addEventListener("scroll",e,!1)}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0aWNreV9hbGxfc3RvcmVzLmpzIl0sIm5hbWVzIjpbImEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJiIiwiQXNjcm9sbCIsIlNhIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInMiLCJpIiwibGVuZ3RoIiwiaW5kZXhPZiIsImdldFByb3BlcnR5VmFsdWUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJjc3NUZXh0Iiwib2Zmc2V0V2lkdGgiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwibCIsImNoaWxkTm9kZXMiLCJhcHBlbmRDaGlsZCIsImhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZGRpbmciLCJib3JkZXIiLCJSYSIsIlIiLCJNYXRoIiwicm91bmQiLCJ0b3AiLCJjbGFzc05hbWUiLCJQIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwid2lkdGgiLCJib2R5Il0sIm1hcHBpbmdzIjoiQ0FBQSxXQUNBLElBQUlBLEVBQUlDLFNBQVNDLGNBQWMsaUJBQWtCQyxFQUFJLEtBR3JELFNBQVNDLElBQ1AsR0FBUyxNQUFMRCxFQUFXLENBRWIsSUFEQSxJQUFJRSxFQUFLQyxpQkFBaUJOLEVBQUcsSUFBS08sRUFBSSxHQUM3QkMsRUFBSSxFQUFHQSxFQUFJSCxFQUFHSSxPQUFRRCxJQUNJLEdBQTdCSCxFQUFHRyxHQUFHRSxRQUFRLGFBQWdELEdBQTVCTCxFQUFHRyxHQUFHRSxRQUFRLFlBQThDLEdBQTNCTCxFQUFHRyxHQUFHRSxRQUFRLFdBQThDLEdBQTVCTCxFQUFHRyxHQUFHRSxRQUFRLFlBQWtELEdBQS9CTCxFQUFHRyxHQUFHRSxRQUFRLGVBQXFELEdBQS9CTCxFQUFHRyxHQUFHRSxRQUFRLGdCQUN4TEgsR0FBS0YsRUFBR0csR0FBSyxLQUFNSCxFQUFHTSxpQkFBaUJOLEVBQUdHLElBQU0sT0FHcERMLEVBQUlGLFNBQVNXLGNBQWMsUUFDekJDLE1BQU1DLFFBQVVQLEVBQUksbUNBQXFDUCxFQUFFZSxZQUFjLE1BQzNFZixFQUFFZ0IsYUFBYWIsRUFBR0gsRUFBRWlCLFlBQ3BCLElBQUlDLEVBQUlsQixFQUFFbUIsV0FBV1YsT0FDckIsSUFBU0QsRUFBSSxFQUFHQSxFQUFJVSxFQUFHVixJQUNyQkwsRUFBRWlCLFlBQVlwQixFQUFFbUIsV0FBVyxJQUU3Qm5CLEVBQUVhLE1BQU1RLE9BQVNsQixFQUFFbUIsd0JBQXdCRCxPQUFTLEtBQ3BEckIsRUFBRWEsTUFBTVUsUUFBVSxJQUNsQnZCLEVBQUVhLE1BQU1XLE9BQVMsSUFFbkIsSUFBSUMsRUFBS3pCLEVBQUVzQix3QkFDUEksRUFBSUMsS0FBS0MsTUFBTUgsRUFBR0ksSUFBTTFCLEVBQUVtQix3QkFBd0JELE9BQVNwQixTQUFTQyxjQUFjLGNBQWNvQix3QkFBd0JPLElBQU0sR0FDN0hKLEVBQUdJLElBeEJxRCxHQXdCekMsRUFDYkosRUFBR0ksSUF6Qm1ELEdBeUJ2Q0gsR0FDbEJ2QixFQUFFMkIsVUFBWSxPQUNkM0IsRUFBRVUsTUFBTWdCLEtBQVFILEVBQUcsT0FFbkJ2QixFQUFFMkIsVUFBWSxTQUNkM0IsRUFBRVUsTUFBTWdCLElBQU1FLFFBR2hCNUIsRUFBRTJCLFVBQVksR0FDZDNCLEVBQUVVLE1BQU1nQixJQUFNLElBRWhCRyxPQUFPQyxpQkFBaUIsU0FBVSxXQUNoQ2pDLEVBQUVrQyxTQUFTLEdBQUdyQixNQUFNc0IsTUFBUTdCLGlCQUFpQk4sRUFBRyxJQUFJbUMsUUFDbkQsR0FyQ0xILE9BQU9DLGlCQUFpQixTQUFVN0IsR0FBUyxHQUMzQ0gsU0FBU21DLEtBQUtILGlCQUFpQixTQUFVN0IsR0FBUyxHQUhsRCIsImZpbGUiOiJzdGlja3lfYWxsX3N0b3Jlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xyXG52YXIgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9tby1zdGlja3knKSwgYiA9IG51bGwsIFAgPSAwOyAgLy8g0LXRgdC70Lgg0L3QvtC70Ywg0LfQsNC80LXQvdC40YLRjCDQvdCwINGH0LjRgdC70L4sINGC0L4g0LHQu9C+0Log0LHRg9C00LXRgiDQv9GA0LjQu9C40L/QsNGC0Ywg0LTQviDRgtC+0LPQviwg0LrQsNC6INCy0LXRgNGF0L3QuNC5INC60YDQsNC5INC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LAg0LTQvtC50LTRkdGCINC00L4g0LLQtdGA0YXQvdC10LPQviDQutGA0LDRjyDRjdC70LXQvNC10L3RgtCwLiDQnNC+0LbQtdGCINCx0YvRgtGMINC+0YLRgNC40YbQsNGC0LXQu9GM0L3Ri9C8INGH0LjRgdC70L7QvFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgQXNjcm9sbCwgZmFsc2UpO1xyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIEFzY3JvbGwsIGZhbHNlKTtcclxuZnVuY3Rpb24gQXNjcm9sbCgpIHtcclxuICBpZiAoYiA9PSBudWxsKSB7XHJcbiAgICB2YXIgU2EgPSBnZXRDb21wdXRlZFN0eWxlKGEsICcnKSwgcyA9ICcnO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBTYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoU2FbaV0uaW5kZXhPZignb3ZlcmZsb3cnKSA9PSAwIHx8IFNhW2ldLmluZGV4T2YoJ3BhZGRpbmcnKSA9PSAwIHx8IFNhW2ldLmluZGV4T2YoJ2JvcmRlcicpID09IDAgfHwgU2FbaV0uaW5kZXhPZignb3V0bGluZScpID09IDAgfHwgU2FbaV0uaW5kZXhPZignYm94LXNoYWRvdycpID09IDAgfHwgU2FbaV0uaW5kZXhPZignYmFja2dyb3VuZCcpID09IDApIHtcclxuICAgICAgICBzICs9IFNhW2ldICsgJzogJyArU2EuZ2V0UHJvcGVydHlWYWx1ZShTYVtpXSkgKyAnOyAnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGIuc3R5bGUuY3NzVGV4dCA9IHMgKyAnIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IHdpZHRoOiAnICsgYS5vZmZzZXRXaWR0aCArICdweDsnO1xyXG4gICAgYS5pbnNlcnRCZWZvcmUoYiwgYS5maXJzdENoaWxkKTtcclxuICAgIHZhciBsID0gYS5jaGlsZE5vZGVzLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGIuYXBwZW5kQ2hpbGQoYS5jaGlsZE5vZGVzWzFdKTtcclxuICAgIH1cclxuICAgIGEuc3R5bGUuaGVpZ2h0ID0gYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnO1xyXG4gICAgYS5zdHlsZS5wYWRkaW5nID0gJzAnO1xyXG4gICAgYS5zdHlsZS5ib3JkZXIgPSAnMCc7XHJcbiAgfVxyXG4gIHZhciBSYSA9IGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgIFIgPSBNYXRoLnJvdW5kKFJhLnRvcCArIGIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpLWZvb3RlcicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIDApOyAgLy8g0YHQtdC70LXQutGC0L7RgCDQsdC70L7QutCwLCDQv9GA0Lgg0LTQvtGB0YLQuNC20LXQvdC40Lgg0LLQtdGA0YXQvdC10LPQviDQutGA0LDRjyDQutC+0YLQvtGA0L7Qs9C+INC90YPQttC90L4g0L7RgtC60YDQtdC/0LjRgtGMINC/0YDQuNC70LjQv9Cw0Y7RidC40Lkg0Y3Qu9C10LzQtdC90YI7ICBNYXRoLnJvdW5kKCkg0YLQvtC70YzQutC+INC00LvRjyBJRTsg0LXRgdC70Lgg0L3QvtC70Ywg0LfQsNC80LXQvdC40YLRjCDQvdCwINGH0LjRgdC70L4sINGC0L4g0LHQu9C+0Log0LHRg9C00LXRgiDQv9GA0LjQu9C40L/QsNGC0Ywg0LTQviDRgtC+0LPQviwg0LrQsNC6INC90LjQttC90LjQuSDQutGA0LDQuSDRjdC70LXQvNC10L3RgtCwINC00L7QudC00ZHRgiDQtNC+INGE0YPRgtC10YDQsFxyXG4gIGlmICgoUmEudG9wIC0gUCkgPD0gMCkge1xyXG4gICAgaWYgKChSYS50b3AgLSBQKSA8PSBSKSB7XHJcbiAgICAgIGIuY2xhc3NOYW1lID0gJ3N0b3AnO1xyXG4gICAgICBiLnN0eWxlLnRvcCA9IC0gUiArJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGIuY2xhc3NOYW1lID0gJ3N0aWNreSc7XHJcbiAgICAgIGIuc3R5bGUudG9wID0gUCArICdweCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGIuY2xhc3NOYW1lID0gJyc7XHJcbiAgICBiLnN0eWxlLnRvcCA9ICcnO1xyXG4gIH1cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhLmNoaWxkcmVuWzBdLnN0eWxlLndpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShhLCAnJykud2lkdGhcclxuICB9LCBmYWxzZSk7XHJcbn1cclxufSkoKTsiXX0=