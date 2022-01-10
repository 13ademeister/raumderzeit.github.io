import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-room',
  templateUrl: './main-room.component.html',
  styleUrls: ['./main-room.component.scss'],
})
export class MainRoomComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  homeClick() {
    this.router.navigateByUrl('/');
  }

  itemInfosMailContent(): string {
    return `
Hallo liebe Menschen vom Raum der Zeit e.V.,%0D%0A
%0D%0A
ich habe einen tollen Gegenstand, den ich gerne in den Raum der Zeit stellen möchte. %0D%0A
Dazu beantworte ich euch gerne ein paar Fragen zum Gegenstand und seiner Geschichte: %0D%0A
%0D%0A
1. Welchen Namen möchtest du ihm geben? %0D%0A
--> [Name für deinen Gegenstand]%0D%0A
%0D%0A
2. Ab wann könntest du ihn vorbeibringen? %0D%0A
--> [jetzt / morgen / in drei Wochen?]%0D%0A
%0D%0A
3. Möchtest du ihn am Ende zurück? %0D%0A
--> [könnt ihr gerne behalten / möchte ihn gerne zurück?]%0D%0A
%0D%0A
4. Wie bist du auf die Idee gekommen? %0D%0A
--> [das hat dem Raum auf jeden Fall gefehlt / finds einfach nur lustig / ...]%0D%0A
%0D%0A
5. Gibt es eine lustige / traurige / spannende Geschichte dazu? %0D%0A
--> [das hat mir meine Oma geschenkt / das war schon am anderen Ende der Welt / ...]%0D%0A
%0D%0A
6. Möchtest du damit auf weitere Informationen aufmerksam machen? %0D%0A
--> [Link zu Webseite / Bilder / Videos / Musik]%0D%0A
%0D%0A
7. Welche Frage fehlt hier noch, was möchtest du noch dazu teilen? %0D%0A
--> [Was ist der Sinn des Lebens? --> Die Antwort ist im Zweifel immer 42.]%0D%0A
%0D%0A
Außerdem packe ich euch gerne noch ein oder zwei Bilder davon in den Anhang zu dieser E-Mail. %0D%0A
%0D%0A
Ich freue mich über eure Rückmeldung! %0D%0A
Liebe Grüße,%0D%0A
%0D%0A
[dein Name]%0D%0A
%0D%0A
P.S.: Mir ist klar, dass der Gegenstand auch "benutzt" wird. %0D%0A
Mir ist auch bewusst, dass mine Angaben zu den Fragen über einen QR Code an dem Gegenstand abgerufen werden können.
`;
  }

  simpleMailContent(): string {
    return `
Hallo liebe Menschen vom Raum der Zeit e.V.,%0D%0A
%0D%0A
Ich habe folgendes Anliegen an euch: %0D%0A
%0D%0A
[dein Anliegen]%0D%0A
%0D%0A
Ich freue mich über eure Rückmeldung! %0D%0A
Liebe Grüße,%0D%0A
%0D%0A
[dein Name]%0D%0A
`;
  }

  eventInfosMailContent(): string {
    return `
Hallo liebe Menschen vom Raum der Zeit e.V.,%0D%0A
%0D%0A
Ich möchte gerne eine Veranstaltung in eurem Raum organisieren und beantworte euch gerne ein paar Fragen dazu:%0D%0A
%0D%0A
1. Wie soll die Veranstaltung heißen? %0D%0A
--> [Name: "Super-Mega-Event"]%0D%0A
%0D%0A
2. Wann soll die Veranstaltung stattfinden? %0D%0A
--> [morgen / nächste Woche / am 30.02. / an einem Sonntag]%0D%0A
%0D%0A
3. Ist das öffentlich oder privat? %0D%0A
--> [nur meine Oma darf kommen / die Stadt ist eingeladen]%0D%0A
%0D%0A
4. Wer bezahlt denn Strom / Wasser und Miete? Könnt ihr dem Raum der Zeit e.V. ein bisschen was spenden? %0D%0A
--> [klar, kein Ding nen Fuffy ist da locker drin / der Eintritt ist für euch / ist nur ein Plenum, aber nen 10er für Strom und Wasser passt]%0D%0A
%0D%0A
5. Welche Frage fehlt hier noch bzw. was möchtest du noch dazu mitteilen? %0D%0A
--> [Was ist der Sinn des Lebens? --> Die Antwort ist im Zweifel immer 42.]%0D%0A
%0D%0A
%0D%0A
Ich freue mich über eure Rückmeldung! %0D%0A
Liebe Grüße,%0D%0A
%0D%0A
[dein Name]%0D%0A
`;
  }
}
