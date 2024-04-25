export interface ItemListProps<T> {
  list: T[];
  onPress: () => void;
  renderItemComponent: (item: T) => JSX.Element;
}
