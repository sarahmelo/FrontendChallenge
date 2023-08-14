import { Component } from '@angular/core';

type Team = {
  teamOne: string
  teamTwo: string
}

type Round = {
  [key: string]: Team
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  public winner: string = '';

  public firstRound: Round = {
    'a': {
      teamOne: 'Demacia',
      teamTwo: 'Freljord',
    },
    'b': {
      teamOne: 'Ilha das Sombras',
      teamTwo: 'Ionia',
    },
    'c': {
      teamOne: 'Piltover',
      teamTwo: 'Shurima',
    },
    'd': {
      teamOne: 'Águas de Sentina',
      teamTwo: 'Zaun',
    }
  }

  public secondRound: Round = {
    'a': {
      teamOne: '',
      teamTwo: '',
    },
    'b': {
      teamOne: '',
      teamTwo: '',
    }
  }

  public thirtyRound: Round = {
    'a':{
      teamOne: '',
      teamTwo: '',
    }
  }

  public approvedForSemiFinal(id: string, team: string): void {
    if (id === 'a') {
      this.secondRound.a.teamOne = team;

      return
    }

    if (id === 'b') {
      this.secondRound.a.teamTwo = team

      return
    }

    if (id === 'c') {
      this.secondRound.b.teamOne = team;

      return
    }

    if (id === 'd') {
      this.secondRound.b.teamTwo = team;

      return
    }
  }

  public approvedForFinal(grade: string, team: string): void {
    if (grade === 'a') {
      this.thirtyRound.a.teamOne = team
    }

    if (grade === 'b') {
      this.thirtyRound.a.teamTwo = team
    }
  }

  public setWinner(team: string): void {
    this.winner = team

    window.alert(`${this.winner} ganhou o torneio!`)
  }

  public isClassifiedForNext(
    team: string,
    grade: string,
    round: Round
  ): boolean {
    const teamsClassified = Object.values(round[grade])

    return teamsClassified.includes(team)
  }
}
