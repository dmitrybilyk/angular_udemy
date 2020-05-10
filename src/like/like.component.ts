export class LikeComponent {
  getLikesCount(): number {
    return this.likesCount;
  }

  getIsSelected(): boolean {
    return this.isSelected;
  }

  constructor(private likesCount: number, private isSelected: boolean) {

  }

  onClick() {
    this.likesCount += this.isSelected ? -1 : 1;
    this.isSelected = !this.isSelected;
  }

}
