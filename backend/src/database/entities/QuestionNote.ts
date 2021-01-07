import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./Question";
import { Note } from "./Note";

@Entity()
export class QuestionNote {
  @PrimaryGeneratedColumn()
  public questionNoteId!: number;

  @Column()
  public noteId!: number;

  @Column()
  public questionId!: number;

  @Column("text")
  public response: string;

  @ManyToOne(() => Question, (question) => question.questionsToNotes)
  public question!: Question;

  @ManyToOne(() => Note, (note) => note.notesToQuestions)
  public note!: Note;
}
