Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),i=this,n=function(){},o=function(){return i.apply(this instanceof n&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,o.prototype=new n,o}),function(e,o){var t,d,p,l,r,s,a,h,c,f,y,u,C,i,b=o.createElement.bind(o),w=o.createTextNode.bind(o);(i=(d=b("span")).style).position="absolute",i.whiteSpace="pre",i.visibility="hidden",y=b("span"),(u=b("span")).style.display="block",u.style.overflow="hidden",u.appendChild(w("⁠")),t=function(i,n){var e,t;if(i.ownerDocument&&!i.ownerDocument!==o){for(r=a=0,f=!(s=1),l=[],p=(i.textContent||i.innerText).replace(/\n/g," "),e=1;e<n;e++)C=u.cloneNode(!0),y.appendChild(C),1===e&&(u.style.textIndent=0);for(u.style.textIndent="",C=void 0;i.firstChild;)i.removeChild(i.firstChild);for(i.appendChild(y),e=0;e<n-1;e++)l.push(y.childNodes[e].clientWidth-10);for(i.removeChild(y);y.firstChild;)y.removeChild(y.firstChild);i.appendChild(d),p.replace(/ /g,function(e,t){s!==n&&(d.appendChild(w(p.substr(r,t-r))),l[s-1]<=d.clientWidth?(f?(c=p.substr(r,t+1-r),r=t+1):(c=p.substr(r,a-r),r=a),(h=b("span")).appendChild(w(c)),i.appendChild(h),f=!0,s++):f=!1,a=t+1,d.removeChild(d.firstChild))}),i.removeChild(d),h=b("span"),s===n&&((t=h.style).display="block",t.overflow="hidden",t.textIndent=0,t.textOverflow="ellipsis",t.whiteSpace="nowrap"),h.appendChild(w(p.substr(r))),i.appendChild(h)}},e.clamp=t}(window,window.document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ0ZWxsaXBzaXMuanMiXSwibmFtZXMiOlsiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiZSIsInRoaXMiLCJUeXBlRXJyb3IiLCJ0IiwiQXJyYXkiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJuIiwiaSIsIm8iLCJhcHBseSIsImNvbmNhdCIsImQiLCJwIiwibCIsInIiLCJzIiwiYSIsImMiLCJoIiwiZiIsInUiLCJ5IiwiY3JlYXRlRWxlbWVudCIsIkMiLCJjcmVhdGVUZXh0Tm9kZSIsInN0eWxlIiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwidmlzaWJpbGl0eSIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImFwcGVuZENoaWxkIiwiYiIsIm93bmVyRG9jdW1lbnQiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsInJlcGxhY2UiLCJjbG9uZU5vZGUiLCJ0ZXh0SW5kZW50IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwicHVzaCIsImNoaWxkTm9kZXMiLCJjbGllbnRXaWR0aCIsInN1YnN0ciIsInRleHRPdmVyZmxvdyIsImNsYW1wIiwid2luZG93IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBQSxTQUFTQyxVQUFVQyxPQUFPRixTQUFTQyxVQUFVQyxLQUFLLFNBQVNDLEdBQUcsR0FBRyxtQkFBbUJDLEtBQUssTUFBTSxJQUFJQyxVQUFVLHdFQUF3RSxJQUFJQyxFQUFFQyxNQUFNTixVQUFVTyxNQUFNQyxLQUFLQyxVQUFVLEdBQUdDLEVBQUVQLEtBQUtRLEVBQUUsYUFBYUMsRUFBRSxXQUFXLE9BQU9GLEVBQUVHLE1BQU1WLGdCQUFnQlEsR0FBR1QsRUFBRUMsS0FBS0QsRUFBRUcsRUFBRVMsT0FBT1IsTUFBTU4sVUFBVU8sTUFBTUMsS0FBS0MsY0FBYyxPQUFPRSxFQUFFWCxVQUFVRyxLQUFLSCxVQUFVWSxFQUFFWixVQUFVLElBQUlXLEVBQUVDLElBQUksU0FBU1YsRUFBRUcsR0FBRyxJQUFJSyxFQUFFQyxFQUFFQyxFQUFFRyxFQUFFQyxFQUFFQyxFQUFFQyxFQUFFQyxFQUFFQyxFQUFFQyxFQUFFQyxFQUFFQyxFQUFFQyxFQUFpRXRCLEVBQS9EdUIsRUFBRXBCLEVBQUVxQixjQUFjekIsS0FBS0ksR0FBR3NCLEVBQUV0QixFQUFFdUIsZUFBZTNCLEtBQUtJLElBQWFILEdBQXFFUyxFQUFFYyxFQUFFLFNBQVNJLE9BQTdFQyxTQUFTLFdBQVc1QixFQUFFNkIsV0FBVyxNQUFNN0IsRUFBRThCLFdBQVcsU0FBZ0NWLEVBQUVHLEVBQUUsU0FBU0YsRUFBRUUsRUFBRSxTQUFTSSxNQUFNSSxRQUFRLFFBQVFWLEVBQUVNLE1BQU1LLFNBQVMsU0FBU1gsRUFBRVksWUFBWVIsRUFBRSxNQUFNakIsRUFBRSxTQUFTUixFQUFFUSxHQUFHLElBQUkwQixFQUFndEJsQyxFQUE5c0IsR0FBR0EsRUFBRW1DLGdCQUFnQm5DLEVBQUVtQyxnQkFBZ0JoQyxFQUFFLENBQUMsSUFBSVcsRUFBRUUsRUFBRSxFQUFNRyxJQUFKSixFQUFFLEdBQU9GLEVBQUUsR0FBR0gsR0FBR1YsRUFBRW9DLGFBQWFwQyxFQUFFcUMsV0FBV0MsUUFBUSxNQUFNLEtBQUtKLEVBQUUsRUFBRUEsRUFBRTFCLEVBQUUwQixJQUFJWixFQUFFRCxFQUFFa0IsV0FBVSxHQUFJbkIsRUFBRWEsWUFBWVgsR0FBRyxJQUFJWSxJQUFJYixFQUFFTSxNQUFNYSxXQUFXLEdBQUcsSUFBSW5CLEVBQUVNLE1BQU1hLFdBQVcsR0FBR2xCLE9BQUUsRUFBT3RCLEVBQUV5QyxZQUFZekMsRUFBRTBDLFlBQVkxQyxFQUFFeUMsWUFBWSxJQUFJekMsRUFBRWlDLFlBQVliLEdBQUdjLEVBQUUsRUFBRUEsRUFBRTFCLEVBQUUsRUFBRTBCLElBQUlyQixFQUFFOEIsS0FBS3ZCLEVBQUV3QixXQUFXVixHQUFHVyxZQUFZLElBQUksSUFBSTdDLEVBQUUwQyxZQUFZdEIsR0FBR0EsRUFBRXFCLFlBQVlyQixFQUFFc0IsWUFBWXRCLEVBQUVxQixZQUFZekMsRUFBRWlDLFlBQVl4QixHQUFHQyxFQUFFNEIsUUFBUSxLQUFLLFNBQVNuQyxFQUFFaUIsR0FBR0wsSUFBSVAsSUFBSUMsRUFBRXdCLFlBQVlSLEVBQUVmLEVBQUVvQyxPQUFPaEMsRUFBRU0sRUFBRU4sS0FBS0QsRUFBRUUsRUFBRSxJQUFJTixFQUFFb0MsYUFBYTFCLEdBQUdELEVBQUVSLEVBQUVvQyxPQUFPaEMsRUFBRU0sRUFBRSxFQUFFTixHQUFHQSxFQUFFTSxFQUFFLElBQUlGLEVBQUVSLEVBQUVvQyxPQUFPaEMsRUFBRUUsRUFBRUYsR0FBR0EsRUFBRUUsSUFBSUMsRUFBRU0sRUFBRSxTQUFTVSxZQUFZUixFQUFFUCxJQUFJbEIsRUFBRWlDLFlBQVloQixHQUFHRSxHQUFFLEVBQUdKLEtBQUtJLEdBQUUsRUFBR0gsRUFBRUksRUFBRSxFQUFFWCxFQUFFaUMsWUFBWWpDLEVBQUVnQyxlQUFlekMsRUFBRTBDLFlBQVlqQyxHQUFHUSxFQUFFTSxFQUFFLFFBQVFSLElBQUlQLEtBQVlSLEVBQXlHaUIsRUFBRVUsT0FBdEdJLFFBQVEsUUFBUS9CLEVBQUVnQyxTQUFTLFNBQVNoQyxFQUFFd0MsV0FBVyxFQUFFeEMsRUFBRStDLGFBQWEsV0FBVy9DLEVBQUU2QixXQUFXLFVBQW1CWixFQUFFZ0IsWUFBWVIsRUFBRWYsRUFBRW9DLE9BQU9oQyxLQUFLZCxFQUFFaUMsWUFBWWhCLEtBQUtqQixFQUFFZ0QsTUFBTXhDLEVBQW5yQyxDQUFzckN5QyxPQUFPQSxPQUFPQyIsImZpbGUiOiJmdGVsbGlwc2lzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiRnVuY3Rpb24ucHJvdG90eXBlLmJpbmR8fChGdW5jdGlvbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbi5wcm90b3R5cGUuYmluZCAtIHdoYXQgaXMgdHJ5aW5nIHRvIGJlIGJvdW5kIGlzIG5vdCBjYWxsYWJsZVwiKTt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSksbj10aGlzLGk9ZnVuY3Rpb24oKXt9LG89ZnVuY3Rpb24oKXtyZXR1cm4gbi5hcHBseSh0aGlzIGluc3RhbmNlb2YgaSYmZT90aGlzOmUsdC5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpfTtyZXR1cm4gaS5wcm90b3R5cGU9dGhpcy5wcm90b3R5cGUsby5wcm90b3R5cGU9bmV3IGksb30pLGZ1bmN0aW9uKGUsdCl7dmFyIG4saSxvLGQscCxsLHIscyxhLGMsaCxmLHUseT10LmNyZWF0ZUVsZW1lbnQuYmluZCh0KSxDPXQuY3JlYXRlVGV4dE5vZGUuYmluZCh0KTsoZnVuY3Rpb24oZSl7ZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZS53aGl0ZVNwYWNlPVwicHJlXCIsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCJ9KSgoaT15KFwic3BhblwiKSkuc3R5bGUpLGg9eShcInNwYW5cIiksKGY9eShcInNwYW5cIikpLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLGYuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIixmLmFwcGVuZENoaWxkKEMoXCLigaBcIikpLG49ZnVuY3Rpb24oZSxuKXt2YXIgYjtpZihlLm93bmVyRG9jdW1lbnQmJiFlLm93bmVyRG9jdW1lbnQhPT10KXtmb3IocD1yPTAsbD0xLGM9ITEsZD1bXSxvPShlLnRleHRDb250ZW50fHxlLmlubmVyVGV4dCkucmVwbGFjZSgvXFxuL2csXCIgXCIpLGI9MTtiPG47YisrKXU9Zi5jbG9uZU5vZGUoITApLGguYXBwZW5kQ2hpbGQodSksMT09PWImJihmLnN0eWxlLnRleHRJbmRlbnQ9MCk7Zm9yKGYuc3R5bGUudGV4dEluZGVudD1cIlwiLHU9dm9pZCAwO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2ZvcihlLmFwcGVuZENoaWxkKGgpLGI9MDtiPG4tMTtiKyspZC5wdXNoKGguY2hpbGROb2Rlc1tiXS5jbGllbnRXaWR0aC0xMCk7Zm9yKGUucmVtb3ZlQ2hpbGQoaCk7aC5maXJzdENoaWxkOyloLnJlbW92ZUNoaWxkKGguZmlyc3RDaGlsZCk7ZS5hcHBlbmRDaGlsZChpKSxvLnJlcGxhY2UoLyAvZyxmdW5jdGlvbih0LGgpe2whPT1uJiYoaS5hcHBlbmRDaGlsZChDKG8uc3Vic3RyKHAsaC1wKSkpLGRbbC0xXTw9aS5jbGllbnRXaWR0aD8oYz8oYT1vLnN1YnN0cihwLGgrMS1wKSxwPWgrMSk6KGE9by5zdWJzdHIocCxyLXApLHA9ciksKHM9eShcInNwYW5cIikpLmFwcGVuZENoaWxkKEMoYSkpLGUuYXBwZW5kQ2hpbGQocyksYz0hMCxsKyspOmM9ITEscj1oKzEsaS5yZW1vdmVDaGlsZChpLmZpcnN0Q2hpbGQpKX0pLGUucmVtb3ZlQ2hpbGQoaSkscz15KFwic3BhblwiKSxsPT09biYmZnVuY3Rpb24oZSl7ZS5kaXNwbGF5PVwiYmxvY2tcIixlLm92ZXJmbG93PVwiaGlkZGVuXCIsZS50ZXh0SW5kZW50PTAsZS50ZXh0T3ZlcmZsb3c9XCJlbGxpcHNpc1wiLGUud2hpdGVTcGFjZT1cIm5vd3JhcFwifShzLnN0eWxlKSxzLmFwcGVuZENoaWxkKEMoby5zdWJzdHIocCkpKSxlLmFwcGVuZENoaWxkKHMpfX0sZS5jbGFtcD1ufSh3aW5kb3csd2luZG93LmRvY3VtZW50KTsiXX0=
