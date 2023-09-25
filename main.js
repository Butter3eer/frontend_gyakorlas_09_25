import './style.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener('DOMContentLoaded', init);

function init() {
  const szamitGomb = document.getElementById("szamit");
  szamitGomb.addEventListener("click", teruletEsKeruletSzamit);
}

function teruletEsKeruletSzamit() {
  const a = parseFloat(document.getElementById("aOldal").value);
  const b = parseFloat(document.getElementById("bOldal").value);
  const c = parseFloat(document.getElementById("cOldal").value);
  const eredmeny = document.getElementById("eredmeny");

  if (a + b <= c || a + c <= b || c + b <= a) {
    eredmeny.textContent = "Hibás adatok! A háromszög nem érvényes."
  }
  else {
    const haromszog = {
      a: a,
      b: b,
      c: c,
      kerulet: function () {
        return this.a + this.b + this.c;
      },
      terulet: function () {
        const s = this.kerulet() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
      },
      teruletEsKeruletSzoveges: function () {
        return `Kerület: ${this.kerulet()}; Terület: ${this.terulet()}`
      }
    };

    eredmeny.textContent = haromszog.teruletEsKeruletSzoveges();
  }
}