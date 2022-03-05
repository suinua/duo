class Phrase {
  final int sectionNumber;
  final int phraseNumber;

  final String jpText;
  final String engText;

  const Phrase(
      this.sectionNumber, this.phraseNumber, this.jpText, this.engText);

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;

    if (other is Phrase) {
      return other.phraseNumber == phraseNumber;
    } else {
      return false;
    }
  }
}