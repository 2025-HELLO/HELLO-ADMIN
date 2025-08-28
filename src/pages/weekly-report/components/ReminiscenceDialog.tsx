import * as s from '../page/WeeklyReportDetail.css';

export type ReminItem = {
  id: string;
  date: string;
  preview: string;
  content: string;
};

interface Props {
  open: boolean;
  item: ReminItem;
  onClose: () => void;
}

const ReminiscenceDialog = ({ open, item, onClose }: Props) => {
  if (!open) {
    return null;
  }

  return (
    <div
      className={s.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="remin-modal-title"
      onClick={onClose}
    >
      <div className={s.modalPanel} onClick={(e) => e.stopPropagation()}>
        <div id="remin-modal-title" className={s.modalHeader}>
          📆 {item.date}
        </div>
        <div className={s.quoteBlock}>{item.content}</div>
      </div>
    </div>
  );
};

export default ReminiscenceDialog;
