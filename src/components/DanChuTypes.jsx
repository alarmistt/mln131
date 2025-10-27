import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const DanChuTypes = () => {
  const comparisonData = [
    {
      criteria: 'Cách thức',
      direct: 'Nhân dân trực tiếp đưa ra quyết định, biểu quyết về các vấn đề.',
      indirect:
        'Nhân dân bầu ra người đại diện (Đại biểu Quốc hội, HĐND...) để thay mặt mình quyết định.',
    },
    {
      criteria: 'Chủ thể quyết định',
      direct: 'Toàn thể nhân dân (cử tri).',
      indirect: 'Cơ quan/Người đại diện do dân bầu ra.',
    },
    {
      criteria: 'Ví dụ',
      direct: '- Trưng cầu dân ý.\n- Bầu cử.\n- Họp tổ dân phố, thôn/bản.',
      indirect:
        '- Quốc hội thông qua Hiến pháp, Luật.\n- HĐND quyết định ngân sách địa phương.',
    },
    {
      criteria: 'Ưu điểm',
      direct: '- Phản ánh chính xác ý chí của dân.',
      indirect:
        '- Khả thi ở quy mô quốc gia (dân số đông).\n- Quyết định mang tính chuyên môn cao.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="container mx-auto py-16 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/90 backdrop-blur-md -z-10" />
      <div className="absolute inset-0 bg-black/30 -z-10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 drop-shadow-lg"
          >
            Phân biệt Dân chủ Trực tiếp và Dân chủ Gián tiếp
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"
          />
        </div>

        <motion.div variants={itemVariants}>
          <Card className="backdrop-blur-md bg-card/95 shadow-2xl border-primary/20">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <Table className="text-lg">
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-[200px] text-primary font-bold text-xl">
                        Tiêu chí
                      </TableHead>
                      <TableHead>
                        <Badge
                          variant="outline"
                          className="font-semibold px-4 py-1.5 text-lg"
                        >
                          Dân chủ Trực tiếp
                        </Badge>
                      </TableHead>
                      <TableHead>
                        <Badge
                          variant="outline"
                          className="font-semibold px-4 py-1.5 text-lg"
                        >
                          Dân chủ Gián tiếp (Đại diện)
                        </Badge>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, idx) => (
                      <TableRow
                        key={row.criteria}
                        className={cn(
                          'transition-colors hover:bg-primary/10',
                          idx % 2 === 0 ? 'bg-primary/[0.05]' : ''
                        )}
                      >
                        <TableCell className="font-medium text-primary/90 text-lg">
                          {row.criteria}
                        </TableCell>
                        <TableCell className="whitespace-pre-line text-foreground/90">
                          {row.direct}
                        </TableCell>
                        <TableCell className="whitespace-pre-line text-foreground/90">
                          {row.indirect}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={containerVariants} className="mt-12 space-y-6">
          <Card className="backdrop-blur-md bg-card/95 shadow-xl border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary drop-shadow-md">
                Thực tiễn tại Việt Nam
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="p-4 rounded-lg bg-primary/5 border border-primary/10"
              >
                <p className="font-medium text-lg">
                  Khẳng định: Việt Nam thực hiện cả hai hình thức, trong đó{' '}
                  <span className="text-primary font-bold">
                    Dân chủ Gián tiếp (Đại diện)
                  </span>{' '}
                  là chủ yếu.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary/90">
                      Dân chủ Gián tiếp (Chủ yếu)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4">
                      <motion.div
                        variants={itemVariants}
                        className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        <p>
                          Thực hiện quyền lực nhà nước thông qua Quốc hội (cơ
                          quan đại diện cao nhất của Nhân dân).
                        </p>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        <p>
                          Thực hiện quyền lực nhà nước phải do Đảng Cộng sản
                          Việt Nam lãnh đạo (theo Điều 4 Hiến pháp 2013).
                        </p>
                      </motion.div>
                      <motion.div
                        variants={itemVariants}
                        className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        <p>
                          Hoạt động của Nhà nước được nhân dân giám sát (với
                          phương châm{' '}
                          <span className="font-semibold text-primary">
                            "Dân biết, dân bàn, dân làm, dân kiểm tra"
                          </span>
                          ).
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DanChuTypes;
