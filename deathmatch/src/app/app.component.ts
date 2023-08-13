import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  public winner: string = '';

  public teams = {
    ['a']: {
      teamOne: 'Demacia',
      teamTwo: 'Freljord',
    },
    ['b']: {
      teamOne: 'Ilha das Sombras',
      teamTwo: 'Ionia',
    },
    ['c']: {
      teamOne: 'Piltover',
      teamTwo: 'Shurima',
    },
    ['d']: {
      teamOne: 'Águas de Sentina',
      teamTwo: 'Zaun',
    }
  }

  public semiFinal = {
    ['a']: {
      teamOne: '',
      teamTwo: '',
    },
    ['b']: {
      teamOne: '',
      teamTwo: '',
    }
  }

  public final = {
    teamOne: '',
    teamTwo: '',
  }

  public approvedForSemiFinal(grade: string, team: string): void {
    if (grade === 'a') {
      this.semiFinal.a.teamOne = team;

      return
    }

    if (grade === 'b') {
      this.semiFinal.a.teamTwo = team

      return
    }

    if (grade === 'c') {
      this.semiFinal.b.teamOne = team;

      return
    }

    if (grade === 'd') {
      this.semiFinal.b.teamTwo = team;

      return
    }
  }

  public approvedForFinal(grade: string, team: string): void {
    if (grade === 'a') {
      this.final.teamOne = team
    }

    if (grade === 'b') {
      this.final.teamTwo = team
    }
  }

  public setWinner(team: string): void {
    this.winner = team
  }
}
